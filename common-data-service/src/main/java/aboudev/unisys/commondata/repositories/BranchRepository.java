package aboudev.unisys.commondata.repositories;

import aboudev.unisys.commondata.entities.Branch;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchRepository extends org.springframework.data.repository.Repository<Branch, Integer> {
    Page<Branch> findAll(Pageable pageable);
}
