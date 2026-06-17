package com.example.demo.controller;
import com.example.demo.DTO.CommentDTO;
import com.example.demo.model.Comment;
import com.example.demo.service.mappers.CommentMapper;
import com.example.demo.service.repositories.CommentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Comment")
@CrossOrigin
public class CommentController {
    private CommentRepository CommentRepository;

    public CommentController(CommentRepository commentRepository) {
        CommentRepository = commentRepository;
    }

    @GetMapping("/getComment")

    public ResponseEntity<List<Comment>> getComment() {
        try {
            return new ResponseEntity<>(CommentRepository.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getCommentById/{bookid}")
    public ResponseEntity<List<Comment>> getCommentById(@PathVariable long bookid) {
        try {
           List<Comment>c = CommentRepository.findCommentsByBookId( bookid);
            if (c == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getCommentsbyBookId/{bookId}")
    public ResponseEntity<List<Comment>> findCommentsByBookId(@PathVariable long bookId) {
        try {
            List<Comment> c= CommentRepository.findCommentsByBookId(bookId);
            if (c == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/AddComment")
    public ResponseEntity<Comment> CreateComment(@RequestBody Comment c){
        try{
            Comment newComment = CommentRepository.save(c);
            return new ResponseEntity<>(newComment, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/updateComment/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable long id, @RequestBody Comment co) {
        try {
            Comment co1 = CommentRepository.findById(id).orElse(null);
            if (co1 == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            co1.setBook(co1.getBook());
            co1.setDate(co1.getDate());
            co1.setContent(co1.getContent());
            co1.setUser(co1.getUser());
            co1.setId(co1.getId());

            CommentRepository.save(co1);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
        @DeleteMapping("/delete/{id}")
        public ResponseEntity<Comment> updateBook(@PathVariable long id) {
            try {
                CommentRepository.deleteById(id);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

    }






















































