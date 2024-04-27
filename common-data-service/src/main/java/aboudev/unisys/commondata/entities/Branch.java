package aboudev.unisys.commondata.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Branch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, length = 200)
    @NotBlank
    @Size(min = 2, max = 200)
    private String name;
    @NotBlank
    @Size(min = 2, max = 200)
    @Column(nullable = false, length = 4)
    private String languageCode;
}
