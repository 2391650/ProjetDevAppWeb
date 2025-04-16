package frognest.tech.backend.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Activite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idactivity;
    private Date date;



      @ManyToOne
      Categorie categorie;
      @ManyToOne
      Eleve eleve;


    public Long getIdactivity() {
        return idactivity;
    }

    public void setIdactivity(Long idactivity) {
        this.idactivity = idactivity;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }

    public Eleve getEleve() {
        return eleve;
    }

    public void setEleve(Eleve eleve) {
        this.eleve = eleve;
    }
}
