package frognest.tech.backend.controller;

import frognest.tech.backend.model.Activite;
import frognest.tech.backend.repositories.EleveRepository;
import frognest.tech.backend.model.Eleve;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/eleve")
@CrossOrigin

public class EleveController {



    @GetMapping("/read/{groupId}")
    public List<Eleve> getEleveByIdGroup( @PathVariable Long groupId) {
        return eleveRepository.findByGroupe_Idgroup(groupId);
    }

    @Autowired
    private EleveRepository eleveRepository;

    @PostMapping("/create")
    public Eleve createEleve(@RequestBody Eleve eleve) {
        eleveRepository.save(eleve);
        return eleve;
    }




    @DeleteMapping("/delete/{firstname}")
    public String deleteEleveByName(@PathVariable String firstname) {
        Eleve eleve = eleveRepository.findByFirstname(firstname);
        if (eleve == null) {
            throw new RuntimeException("Not found: " + firstname);
        }
        eleveRepository.delete(eleve);
        return "Eleve '" + firstname + "' has been deleted successfully.";
    }



    @PutMapping("/update/{firstname}")
    public String updateEleve(@PathVariable String firstname, @RequestBody Eleve updateEleve) {
        Eleve eleve = eleveRepository.findByFirstname(firstname);
        if (eleve == null) {
            throw new RuntimeException("Not found: " + firstname);
        }


        if (updateEleve.getFirstname() != null) {
            eleve.setFirstname(updateEleve.getFirstname());
        }
        if (updateEleve.getLastname() != null) {
            eleve.setLastname(updateEleve.getLastname());
        }

        eleveRepository.save(eleve);
        return "Eleve '" + firstname + "' has been updated successfully.";
    }
}