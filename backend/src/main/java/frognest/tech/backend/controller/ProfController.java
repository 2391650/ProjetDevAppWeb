package frognest.tech.backend.controller;

import frognest.tech.backend.model.Prof;
import frognest.tech.backend.service.ProfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/prof")
@CrossOrigin
public class ProfController {
    @Autowired
    private ProfService profService;

    @PostMapping("/create")
    public boolean registerProf(@RequestBody Prof prof) {
        return profService.createProf(prof);
    }

    @GetMapping("/login/{firstname}/{passwd}")
    public Prof loginProf(@PathVariable String firstname, @PathVariable String passwd) {
        return profService.findProfByNameAndPassword(firstname, passwd);
    }

    @GetMapping("/findByFirstname/{firstname}")
    public Prof findByFirstname(@PathVariable String firstname) {
        return profService.findByFirstname(firstname);
    }
}