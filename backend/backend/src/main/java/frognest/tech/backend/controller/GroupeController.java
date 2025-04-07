package frognest.tech.backend.controller;

import frognest.tech.backend.model.Activite;
import frognest.tech.backend.model.Groupe;
import frognest.tech.backend.repositories.GroupeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/groupe")
@CrossOrigin
public class GroupeController {



    @Autowired
    private GroupeRepository groupeRepository;

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