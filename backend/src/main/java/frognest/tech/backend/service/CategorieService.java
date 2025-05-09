package frognest.tech.backend.service;

import frognest.tech.backend.model.Categorie;
import frognest.tech.backend.model.Groupe;
import frognest.tech.backend.repositories.CategorieRepository;
import frognest.tech.backend.repositories.GroupeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class    CategorieService {

    @Autowired
    private CategorieRepository categorieRepository;

    @Autowired
    private GroupeRepository groupeRepository;

    public Categorie createCategory(Categorie categorie) {
        if (categorie.getGroupe() != null && categorie.getGroupe().getIdgroup() != null) {
            Groupe groupe = groupeRepository.findAllByIdgroup(categorie.getGroupe().getIdgroup());
            if (groupe == null) {
                throw new RuntimeException("Not found");
            }
            categorie.setGroupe(groupe);
        } else {
            throw new RuntimeException("ABORTING BE SMART");
        }

        return categorieRepository.save(categorie);
    }

    public boolean deleteCategoryByName(String nomCategorie) {
        Categorie categorie = categorieRepository.findByNomcategorie(nomCategorie);
        if (categorie == null) {
            throw new RuntimeException( nomCategorie + " not found");
        }
        categorieRepository.delete(categorie);
        return true;
    }

    public List<Categorie> getCategoriesByGroup(Long idgroup) {
        return categorieRepository.findByGroupe_Idgroup(idgroup);
    }

    public List<Categorie> getAll() {
        return categorieRepository.findAll();
    }
}