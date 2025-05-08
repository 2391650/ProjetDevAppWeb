package frognest.tech.backend.controller;

import frognest.tech.backend.model.Categorie;
import frognest.tech.backend.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorie")
@CrossOrigin
public class CategorieController {

    @Autowired
    private CategorieService categorieService;

    @GetMapping("/read")
    public List<Categorie> getAll() {
        return categorieService.getAll();
    }

    @PostMapping("/create")
    public Categorie createCategory(@RequestBody Categorie categorie) {
        return categorieService.createCategory(categorie);
    }

    @GetMapping("/groupe/{idgroup}")
    public List<Categorie> getCategoriesByGroup(@PathVariable Long idgroup) {
        return categorieService.getCategoriesByGroup(idgroup);
    }

    @DeleteMapping("/delete/{nomCategorie}")
    public String deleteCategoryByName(@PathVariable String nomCategorie) {
        boolean deleted = categorieService.deleteCategoryByName(nomCategorie);
        if (deleted) {
            return  nomCategorie + "' has been deleted ";
        } else {
            return nomCategorie + "' not found.";
        }
    }
}