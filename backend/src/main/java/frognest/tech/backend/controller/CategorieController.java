package frognest.tech.backend.controller;

import frognest.tech.backend.model.Activite;
import frognest.tech.backend.model.Groupe;
import frognest.tech.backend.repositories.CategorieRepository;
import frognest.tech.backend.model.Categorie;
import frognest.tech.backend.repositories.GroupeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorie")
@CrossOrigin


public class CategorieController {

    @Autowired
    private CategorieRepository categorieRepository;
    @Autowired
    private GroupeRepository groupeRepository;

    @GetMapping("/read")
    public List<Categorie> getAll() {
        return categorieRepository.findAll();
    }

    @PostMapping("/create")
    public Categorie createCategory(@RequestBody Categorie categorie) {
        if (categorie.getGroupe() != null && categorie.getGroupe().getIdgroup() != null) {
            Groupe groupe = groupeRepository.findAllByIdgroup(categorie.getGroupe().getIdgroup());
            if (groupe == null) {
                throw new RuntimeException("Groupe introuvable avec id: " + categorie.getGroupe().getIdgroup());
            }
            categorie.setGroupe(groupe);
        } else {
            throw new RuntimeException("L'objet groupe ou son id est manquant.");
        }

        return categorieRepository.save(categorie);
    }


    @GetMapping("/groupe/{idgroup}")
    public List<Categorie> getCategoriesByGroup(@PathVariable Long idgroup) {
        return categorieRepository.findByGroupe_Idgroup(idgroup);
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

}