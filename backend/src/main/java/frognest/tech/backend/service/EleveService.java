package frognest.tech.backend.service;

import frognest.tech.backend.model.Eleve;
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

    public boolean deleteEleveById(Long ideleve) {
        if (!eleveRepository.existsById(ideleve)) {
            throw new RuntimeException(ideleve + " not found");
        }
        eleveRepository.deleteById(ideleve);
        return true;
    }

    public List<Eleve> getEleveByIdGroup(Long groupId) {
        return eleveRepository.findByGroupe_Idgroup(groupId);
    }
}