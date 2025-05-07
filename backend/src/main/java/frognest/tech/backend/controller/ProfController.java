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

    @GetMapping("/login/{username}/{passwd}")
    public Prof loginProf(@PathVariable String username, @PathVariable String passwd) {
        return profService.findProfByUsernameAndPassword(username, passwd);
    }

    @GetMapping("/findByUsername/{username}")
    public Prof findByUsername(@PathVariable String username) {
        return profService.findByUsername(username);
    }
}