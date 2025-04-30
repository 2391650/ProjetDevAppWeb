package frognest.tech.backend.controller;

import frognest.tech.backend.model.Eleve;
import frognest.tech.backend.model.GroupDTO;
import frognest.tech.backend.model.Groupe;
import frognest.tech.backend.model.Prof;
import frognest.tech.backend.repositories.GroupeRepository;
import frognest.tech.backend.repositories.EleveRepository;
import frognest.tech.backend.repositories.ProfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    public boolean createGroup(@RequestBody Groupe groupe) {
        if (groupeRepository.existsByNomGroupe(groupe.getNomGroupe())){
            return false;
        }
        groupeRepository.save(groupe);
        return true;
    }

    @PostMapping("/create")
    public boolean createGroup(@RequestBody GroupDTO.GroupeDTO dto) {
        if (groupeRepository.existsByNomGroupe(dto.getNomGroupe())) {
            return false;
        }

        Optional<Prof> optionalProf = ProfRepository.findById(dto.getProfId());
        if (optionalProf.isEmpty()) {
            throw new RuntimeException("Prof not found with ID: " + dto.getProfId());
        }

        Prof prof = optionalProf.get();
        Groupe groupe = new Groupe();
        groupe.setNomGroupe(dto.getNomGroupe());
        groupe.setProf(prof);

        groupeRepository.save(groupe);
        return true;
    }


    @DeleteMapping("/delete/{idGroupe}")
    public String deleteGroupById(@PathVariable Long idGroupe) {
        Groupe groupe = groupeRepository.findAllByIdgroup(idGroupe);
        if (groupe == null) {
            throw new RuntimeException("Not found: " + idGroupe);
        }


        List<Eleve> eleves = eleveRepository.findByGroupe(groupe);
        for (Eleve eleve : eleves) {
            eleveRepository.delete(eleve);
        }

        // Supprimer le groupe
        groupeRepository.delete(groupe);
        return "Group '" + idGroupe + "' has been deleted successfully.";
    }

    @PutMapping("/update/{isGroupe}")
    public String updateGroupById(@PathVariable Long idGroupe, @RequestBody String newIdGroupe) {
        Groupe groupe = groupeRepository.findAllByIdgroup(idGroupe);
        if (groupe == null) {
            throw new RuntimeException("Not found: " + idGroupe);
        }
        groupe.setNomGroupe(newIdGroupe);
        groupeRepository.save(groupe);
        return "Group '" + idGroupe + "' has been updated to '" + newIdGroupe + "' successfully.";
    }
}