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

    @GetMapping("/login/{fullname}/{passwd}")
    public Prof loginProf(@PathVariable String fullname, @PathVariable String passwd) {
        return profService.findProfByNameAndPassword(fullname, passwd);
    }

    @GetMapping("/findByFullname/{fullname}")
    public Prof findByFullname(@PathVariable String fullname) {
        return profService.findByFirstname(fullname);
    }
}