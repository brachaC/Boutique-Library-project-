package com.example.demo.service.mappers;

import com.example.demo.DTO.BookDTO;
import com.example.demo.model.Book;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel="spring")
public interface BookMapper {

    BookDTO toBookDTO(Book b);

    Book toBook(BookDTO bookDTO);

    List<BookDTO> toBookDTO(List<Book> bookList);
}
