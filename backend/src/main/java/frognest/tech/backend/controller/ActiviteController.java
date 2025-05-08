package frognest.tech.backend.controller;

import frognest.tech.backend.model.Activite;
import frognest.tech.backend.service.ActiviteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activite")
@CrossOrigin
public class ActiviteController {

    @Autowired
    private ActiviteService activiteService;

    @GetMapping("/read")
    public List<Activite> getAll() {
        return activiteService.getAll();
    }

    @GetMapping("/eleve/{ideleve}")
    public List<Activite> getActivitesByEleve(@PathVariable Long ideleve) {
        return activiteService.getActivitesByEleve(ideleve);
    }

    @PostMapping("/historique")
    public Activite createActivity(@RequestBody Activite activite) {
        return activiteService.createActivity(activite);
    }
}