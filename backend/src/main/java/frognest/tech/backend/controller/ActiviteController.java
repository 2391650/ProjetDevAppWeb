package frognest.tech.backend.controller;

import frognest.tech.backend.repositories.ActiviteRepository;
import frognest.tech.backend.model.Activite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activite")
@CrossOrigin



public class ActiviteController {

    @Autowired
    ActiviteRepository activiteRepository;

    @GetMapping("/read")
    public List<Activite> getAll() {
        return activiteRepository.findAll();
    }
    @PostMapping("/historique")
    public Activite createActivity(@RequestBody Activite activite) {
        activiteRepository.save(activite);
        return  activite;
    }
}