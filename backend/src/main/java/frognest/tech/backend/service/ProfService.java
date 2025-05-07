package frognest.tech.backend.service;

import frognest.tech.backend.model.Prof;
import frognest.tech.backend.repositories.ProfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

// @author Tarek
@Service
public class ProfService {
    private final ProfRepository profRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public ProfService(ProfRepository profRepository) {
        this.profRepository = profRepository;
    }

    public boolean createProf(Prof prof) {
        if (profRepository.findByUsername(prof.getUsername()) == null) {
            prof.setPasswd(passwordEncoder.encode(prof.getPasswd()));
            profRepository.save(prof);
            return true;
        }
        return false;
    }

    public Prof findProfByUsernameAndPassword(String username, String passwd) {
        Prof prof = profRepository.findByUsername(username);
        if (prof != null && passwordEncoder.matches(passwd, prof.getPasswd())) {
            return prof;
        }
        return null;
    }

    public Prof findByUsername(String username) {
        return profRepository.findByUsername(username);
    }
}