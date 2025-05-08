package frognest.tech.backend.controller;

import frognest.tech.backend.model.GroupDTO;
import frognest.tech.backend.model.Groupe;
import frognest.tech.backend.service.GroupeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/groupe")
@CrossOrigin
public class GroupeController {

    @Autowired
    private GroupeService groupeService;

    @GetMapping("/read")
    public List<Groupe> getAll() {
        return groupeService.getAll();
    }

    @GetMapping("/read/{profId}")
    public List<Groupe> getGroupsByProfId(@PathVariable Long profId) {
        return groupeService.getGroupsByProfId(profId);
    }

    @PostMapping("/create")
    public boolean createGroup(@RequestBody GroupDTO.GroupeDTO dto) {
        return groupeService.createGroup(dto);
    }

    @DeleteMapping("/delete/{idGroupe}")
    public String deleteGroupById(@PathVariable Long idGroupe) {
        boolean deleted = groupeService.deleteGroupById(idGroupe);
        if (deleted) {
            return idGroupe + "' has been deleted ";
        } else {
            return  idGroupe + "' not found.";
        }
    }
}