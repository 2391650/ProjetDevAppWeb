package frognest.tech.backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Eleve {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ideleve;

    private String firstname;

    private String lastname;

    @ManyToOne
    @JoinColumn(name="idgroup")
    Groupe groupe;


    // Solution TEMPORAIRE proposée par ChatGPT, méthode peu recommandée, supression en cascade
    // Méthode choisie TEMPORAIREMENT parce que j'était trop fatigué pour chercher une autre solution (méthode de service)
    @OneToMany(mappedBy = "eleve", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Activite> activites;


    public Long getIdeleve() {
        return ideleve;
    }

    public void setIdeleve(Long ideleve) {
        this.ideleve = ideleve;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Groupe getGroupe() {
        return groupe;
    }

    public void setGroupe(Groupe groupe) {
        this.groupe = groupe;
    }
}
