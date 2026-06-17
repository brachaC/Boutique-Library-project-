package com.example.demo.service.mappers;

import com.example.demo.DTO.CommentDTO;
import com.example.demo.model.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel="spring")
public interface CommentMapper {
    @Mapping(source = "book.id", target = "bookId")
    CommentDTO toDTO(Comment c) ;
    Comment toComment(CommentDTO CommentDTO);

    List<CommentDTO> toDTO(List<Comment> comments);
}
