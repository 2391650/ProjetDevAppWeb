package frognest.tech.backend.service;

import frognest.tech.backend.model.Activite;
import frognest.tech.backend.model.Eleve;
import frognest.tech.backend.repositories.ActiviteRepository;
import frognest.tech.backend.repositories.EleveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EleveService {

    @Autowired
    private EleveRepository eleveRepository;

    public Eleve createEleve(Eleve eleve) {
        return eleveRepository.save(eleve);
    }

    @Autowired
    private ActiviteRepository activiteRepository;

    public boolean deleteEleveById(Long idEleve) {
        Eleve eleve = eleveRepository.findById(idEleve).orElse(null);
        if (eleve == null) {
            throw new RuntimeException(idEleve + " not found");
        }

        List<Activite> activites = activiteRepository.findByEleve(eleve);
        for (Activite activite : activites) {
            activiteRepository.delete(activite);
        }

        eleveRepository.delete(eleve);
        return true;
    }

    public List<Eleve> getEleveByIdGroup(Long groupId) {
        return eleveRepository.findByGroupe_Idgroup(groupId);
    }
}