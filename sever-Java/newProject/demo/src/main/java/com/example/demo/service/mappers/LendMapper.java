package com.example.demo.service.mappers;



import com.example.demo.DTO.LendDTO;
import com.example.demo.model.Lend;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
@Mapper(componentModel="spring")
public interface LendMapper {

@Mapping(source = "user.userName",target = "userName")
@Mapping(source = "book.title",target = "bookName")
LendDTO toDTO(Lend l);
List<LendDTO> toLendDTO(List<Lend> lendList);

}
