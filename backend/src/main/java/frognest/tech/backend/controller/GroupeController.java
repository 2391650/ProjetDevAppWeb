package frognest.tech.backend.controller;

import frognest.tech.backend.model.Eleve;
import frognest.tech.backend.model.Groupe;
import frognest.tech.backend.repositories.GroupeRepository;
import frognest.tech.backend.repositories.EleveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/groupe")
@CrossOrigin
public class GroupeController {

    @Autowired
    private GroupeRepository groupeRepository;

    @Autowired
    private EleveRepository eleveRepository; // Ajout de l'instance du repository

    @GetMapping("/read")
    public List<Groupe> getAll() {
        return groupeRepository.findAll();
    }

    @PostMapping("/create")
    public Groupe createGroup(@RequestBody Groupe groupe) {
        groupeRepository.save(groupe);
        return groupe;
    }

    @DeleteMapping("/delete/{nomGroupe}")
    public String deleteGroupByName(@PathVariable String nomGroupe) {
        Groupe groupe = groupeRepository.findByNomGroupe(nomGroupe);
        if (groupe == null) {
            throw new RuntimeException("Not found: " + nomGroupe);
        }

        // Trouver et supprimer les élèves associés
        List<Eleve> eleves = eleveRepository.findByGroupe(groupe);
        for (Eleve eleve : eleves) {
            eleveRepository.delete(eleve);
        }

        // Supprimer le groupe
        groupeRepository.delete(groupe);
        return "Group '" + nomGroupe + "' has been deleted successfully.";
    }

    @PutMapping("/update/{nomGroupe}")
    public String updateGroupByName(@PathVariable String nomGroupe, @RequestBody String newNomGroupe) {
        Groupe groupe = groupeRepository.findByNomGroupe(nomGroupe);
        if (groupe == null) {
            throw new RuntimeException("Not found: " + nomGroupe);
        }
        groupe.setNomGroupe(newNomGroupe);
        groupeRepository.save(groupe);
        return "Group '" + nomGroupe + "' has been updated to '" + newNomGroupe + "' successfully.";
    }
}