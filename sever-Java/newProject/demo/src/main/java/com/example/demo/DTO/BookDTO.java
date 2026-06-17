package com.example.demo.DTO;

public record BookDTO(
        Long id,String title,String author,String image,String summery,int pageCount,String categoryName,boolean status) {
}
