package com.example.demo.controller;
import com.example.demo.DTO.UsersDTO;
import com.example.demo.model.Users;
import com.example.demo.model.Users;
import com.example.demo.service.mappers.UsersMapper;
import com.example.demo.service.repositories.UsersRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/Users")
public class UsersController {
    private UsersRepository UsersRepository;
    private UsersMapper usersMapper;
    public UsersController(UsersRepository usersRepository,UsersMapper usersMapper) {
        UsersRepository = usersRepository;
        this.usersMapper = usersMapper;
    }

    @GetMapping("/getUsers")
    public ResponseEntity<List<Users>> getUsers() {
        try {
            return new ResponseEntity<>(UsersRepository.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getUsersById/{id}")
    public ResponseEntity<Users> getUsersById(@PathVariable long id) {
        try {
            Users u = UsersRepository.findById(id).orElse(null);
            if (u == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(u, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getUserByUserName/{userName}")
    public ResponseEntity<Users> getUserByUserName(@PathVariable String userName) {
        try {
            Users u = UsersRepository.findByUserName(userName);
            if (u == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(u, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/addUser")
    public ResponseEntity<Users> createUser(@RequestBody Users u){
        try{
            Users newUser = UsersRepository.save(u);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/updateUsers/{id}")
    public ResponseEntity<Users> updateUsers(@PathVariable long id,@RequestBody Users u) {
        try {
            Users u1 =UsersRepository.findById(id).orElse(null);
            if (u1 == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            u1.setComment(u1.getComment());
            u1.setFirstName(u1.getFirstName());
            u1.setLastName(u1.getLastName());
            u1.setLend(u1.getLend());
            u1.setMail(u1.getMail());
            u1.setPassword(u1.getPassword());
            u1.setPhoneNumber(u1.getPhoneNumber());
            u1.setTz(u1.getTz());
            u1.setUserName(u1.getUserName());
            u1.setStatus(u1.getStatus());

            UsersRepository.save(u1);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Users> deleteUser(@PathVariable long id) {
        try {
            UsersRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
