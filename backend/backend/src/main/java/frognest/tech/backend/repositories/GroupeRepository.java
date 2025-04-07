package frognest.tech.backend.repositories;

import frognest.tech.backend.model.Groupe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupeRepository extends JpaRepository<Groupe, Long> {
    Groupe findByNomGroupe(String nomGroupe);
}