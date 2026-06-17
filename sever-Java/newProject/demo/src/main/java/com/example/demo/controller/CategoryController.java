package com.example.demo.controller;



import com.example.demo.model.Category;
import com.example.demo.service.repositories.CategoryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Category")
@CrossOrigin
public class CategoryController {
    private CategoryRepository CategoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        CategoryRepository = categoryRepository;
    }

    @GetMapping("/getCategory")

    public ResponseEntity<List<Category>> getCategory() {
        try {
            return new ResponseEntity<>(CategoryRepository.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getCategoryById/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable long id) {
        try {
            Category c = CategoryRepository.findById(id).orElse(null);
            if (c == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/CreateCategory")
    public ResponseEntity<Category> CreateCategory(@RequestBody Category c){
        try{
            Category newCategory = CategoryRepository.save(c);
            return new ResponseEntity<>(newCategory, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Category> updateBook(@PathVariable long id, @RequestBody Category c) {
        try {
            Category c1 = CategoryRepository.findById(id).orElse(null);
            if (c1 == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
//            c1.;
//            c1.setId(c.getId());
//            c1.setImage(c.getImage());
//            c1.setPageCount(c.getPageCount());
//            c1.setSummery(c.getSummery());
//            c1.setTitle(c.getTitle());

            CategoryRepository.save(c1);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Category> updateBook(@PathVariable long id) {
        try {
            CategoryRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
