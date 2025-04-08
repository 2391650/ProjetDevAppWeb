package frognest.tech.backend.repositories;


import frognest.tech.backend.model.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {
    Categorie findByNomcategorie(String nomcategorie);
}