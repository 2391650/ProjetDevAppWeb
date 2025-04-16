package frognest.tech.backend.repositories;

import frognest.tech.backend.model.Eleve;
import frognest.tech.backend.model.Groupe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EleveRepository extends JpaRepository<Eleve, Long> {

    Eleve findByFirstname(String firstname);

    Eleve findByIdeleve(Long ideleve);

    List<Eleve> findByGroupe(Groupe groupe);

    List<Eleve> findByGroupe_Idgroup(Long  idGroupe);
}