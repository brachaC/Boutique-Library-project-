package com.example.demo.service.repositories;

import com.example.demo.model.Comment;
import com.example.demo.model.Lend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LendRepository extends JpaRepository<Lend, Long> {
    List<Lend> findLendByUserId( long userId);

}
