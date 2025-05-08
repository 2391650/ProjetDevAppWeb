package frognest.tech.backend.controller;

import frognest.tech.backend.model.Eleve;
import frognest.tech.backend.service.EleveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/eleve")
@CrossOrigin
public class EleveController {

    @Autowired
    private EleveService eleveService;

    @GetMapping("/read/{groupId}")
    public List<Eleve> getEleveByIdGroup(@PathVariable Long groupId) {
        return eleveService.getEleveByIdGroup(groupId);
    }

    @PostMapping("/create")
    public Eleve createEleve(@RequestBody Eleve eleve) {
        return eleveService.createEleve(eleve);
    }

    @DeleteMapping("/delete/{ideleve}")
    public String deleteEleveById(@PathVariable Long ideleve) {
        boolean deleted = eleveService.deleteEleveById(ideleve);
        if (deleted) {
            return  ideleve + " has been deleted ";
        } else {
            return ideleve + " not found.";
        }
    }
}