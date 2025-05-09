package frognest.tech.backend.repositories;

import frognest.tech.backend.model.Activite;
import frognest.tech.backend.model.Eleve;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ActiviteRepository extends JpaRepository<Activite, Long> {
    List<Activite> findByEleve_Ideleve(Long ideleve);

    List<Activite> findByEleve(Eleve eleve);
}
