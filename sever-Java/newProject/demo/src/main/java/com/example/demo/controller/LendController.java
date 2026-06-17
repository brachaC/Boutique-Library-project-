package com.example.demo.controller;

import com.example.demo.DTO.LendDTO;
import com.example.demo.model.Comment;
import com.example.demo.model.Lend;
import com.example.demo.service.mappers.LendMapper;
import com.example.demo.service.repositories.LendRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Lend")
@CrossOrigin
public class LendController{
    private LendRepository LendRepository;
    private LendMapper LendMapper;
    public LendController(LendRepository lendRepository, LendMapper lendMapper) {
        LendRepository = lendRepository;
        this.LendMapper = lendMapper;
    }

    @GetMapping("/getLend")

    public ResponseEntity<List<Lend>> getLend() {
        try {
            return new ResponseEntity<>(LendRepository.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getLendById/{id}")
    public ResponseEntity<LendDTO> getLendById(@PathVariable long id) {
        try {
            Lend l = LendRepository.findById(id).orElse(null);
            if (l == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(LendMapper.toDTO(l), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getlendByUserId/{UserId}")
    public ResponseEntity<List<LendDTO>> findLendByUserId(@PathVariable long UserId) {
        try {
            List<Lend> l= LendRepository.findLendByUserId(UserId);
            if (l == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(LendMapper.toLendDTO(l), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/addLend")
    public ResponseEntity<LendDTO> CreateLend(@RequestBody Lend l){
        try{
            LendDTO newLend = LendMapper.toDTO(LendRepository.save(l));
            return new ResponseEntity<>(newLend, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/updateLend/{id}")
    public ResponseEntity<Lend> updateLend(@PathVariable long id,@RequestBody Lend l) {
        try {
            Lend l1 =LendRepository.findById(id).orElse(null);
            if (l1 == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            l1.setBook(l.getBook());
            l1.setReturnDate(l.getReturnDate());
            l1.setLendingDate(l.getLendingDate());
            l1.setUser(l.getUser());

            LendRepository.save(l1);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Lend> updateBook(@PathVariable long id) {
        try {
            LendRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
