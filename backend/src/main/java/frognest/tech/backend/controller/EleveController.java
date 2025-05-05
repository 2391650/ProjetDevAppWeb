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

    @DeleteMapping("/delete/{ideleve}")
    public String deleteEleveById(@PathVariable Long ideleve) {
        if(!eleveRepository.existsById(ideleve)){
            throw new RuntimeException("Not found: ");
        }
        eleveRepository.deleteById(ideleve);
        return  "Customer with id "+ideleve+" has been deleted success.";
    }
}