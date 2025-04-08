package frognest.tech.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Categorie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idcategorie;

    private String nomcategorie;

    public Long getIdcategorie() {
        return idcategorie;
    }

    public void setIdcategorie(Long idcategorie) {
        this.idcategorie = idcategorie;
    }

    public String getNomcategorie() {
        return nomcategorie;
    }

    public void setNomcategorie(String nomcategorie) {
        this.nomcategorie = nomcategorie;
    }
}
