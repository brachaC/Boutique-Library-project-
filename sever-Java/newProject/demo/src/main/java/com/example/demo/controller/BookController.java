package com.example.demo.controller;

import com.example.demo.DTO.BookDTO;
import com.example.demo.model.Book;
import com.example.demo.service.mappers.BookMapper;
import com.example.demo.service.repositories.BookRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Book")
@CrossOrigin
public class BookController {
    private final BookRepository bookRepository;
    private BookMapper bookMapper;
    public BookController( BookRepository bookRepository,BookMapper bookMapper) {

        this.bookRepository = bookRepository;
        this.bookMapper=bookMapper;
    }

   @GetMapping("/getBooks")
   public ResponseEntity<List<BookDTO>> getBooks(){
        try{
            return new ResponseEntity<>(bookMapper.toBookDTO(bookRepository.findAll()), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getBookById/{id}")
    public ResponseEntity<BookDTO> getBookById(@PathVariable long id){
        try{
            Book b = bookRepository.findById(id).orElse(null);
            if(b==null){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(bookMapper.toBookDTO(b),HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/addBook")
    public ResponseEntity<BookDTO> createBook(@RequestBody Book b){
        try{
            Book newBook = bookRepository.save(b);
            return new ResponseEntity<>(bookMapper.toBookDTO(newBook),HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<BookDTO> updateBook(@PathVariable long id, @RequestBody Book b) {
        try {
            Book b1 = bookRepository.findById(id).orElse(null);
            if (b1 == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            b1.setAuther(b.getAuther());
            b1.setId(b.getId());
            b1.setImage(b.getImage());
            b1.setPageCount(b.getPageCount());
            b1.setSummery(b.getSummery());
            b1.setTitle(b.getTitle());

            bookRepository.save(b1);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<BookDTO> deleteBook(@PathVariable long id) {
        try {
            bookRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
