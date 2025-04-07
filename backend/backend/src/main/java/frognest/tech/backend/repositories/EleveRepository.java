package frognest.tech.backend.repositories;

import frognest.tech.backend.model.Eleve;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EleveRepository extends JpaRepository<Eleve, Long> {
    Eleve findByFirstname(String firstname);
}