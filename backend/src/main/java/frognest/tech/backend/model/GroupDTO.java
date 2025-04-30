package frognest.tech.backend.model;

public class GroupDTO {
    public class GroupeDTO {
        private String nomGroupe;
        private Long profId;

        // Getters et setters
        public String getNomGroupe() {
            return nomGroupe;
        }

        public void setNomGroupe(String nomGroupe) {
            this.nomGroupe = nomGroupe;
        }

        public Long getProfId() {
            return profId;
        }

        public void setProfId(Long profId) {
            this.profId = profId;
        }
    }

}
