package com.example.demo.service.mappers;

import com.example.demo.DTO.CategoryDTO;
import com.example.demo.model.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel="spring")
public interface CategoryMapper {

    CategoryDTO toDTO(Category c);
//    @Mapping(source="Category.name",target="categoryName")
    Category toBook(CategoryDTO CategoryDTO);


}

