package frognest.tech.backend.controller;

import frognest.tech.backend.model.Activite;
import frognest.tech.backend.repositories.CategorieRepository;
import frognest.tech.backend.model.Categorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorie")
@CrossOrigin


public class CategorieController {

    @Autowired
    private CategorieRepository categorieRepository;

    @GetMapping("/read")
    public List<Categorie> getAll() {
        return categorieRepository.findAll();
    }

    @PostMapping("/create")
    public Categorie createCategory(@RequestBody Categorie categorie) {
        categorieRepository.save(categorie);
        return categorie;
    }



    @DeleteMapping("/delete/{nomCategorie}")
    public String deleteCategoryByName(@PathVariable String nomCategorie) {
        Categorie categorie = categorieRepository.findByNomcategorie(nomCategorie);
        if (categorie == null) {
            throw new RuntimeException("Not found: " + nomCategorie);
        }
        categorieRepository.delete(categorie);
        return "Category '" + nomCategorie + "' has been deleted successfully.";
    }



    @PutMapping("/update/{nomCategorie}")
    public String updateCategoryByName(@PathVariable String nomCategorie, @RequestBody String newNomCategorie) {
        Categorie categorie = categorieRepository.findByNomcategorie(nomCategorie);
        if (categorie == null) {
            throw new RuntimeException("Not found: " + nomCategorie);
        }
        categorie.setNomcategorie(newNomCategorie);
        categorieRepository.save(categorie);
        return "Category '" + nomCategorie + "' has been updated to '" + newNomCategorie + "' successfully.";
    }
}