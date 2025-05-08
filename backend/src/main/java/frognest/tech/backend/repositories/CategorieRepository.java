package frognest.tech.backend.repositories;


import frognest.tech.backend.model.Categorie;
import frognest.tech.backend.model.Groupe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {
    Categorie findByNomcategorie(String nomcategorie);

    List<Categorie> findByGroupe_Idgroup(Long  idgroup);

    List<Categorie> findByGroupe(Groupe groupe);



}