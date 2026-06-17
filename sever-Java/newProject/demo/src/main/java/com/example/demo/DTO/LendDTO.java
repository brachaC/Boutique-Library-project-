package com.example.demo.DTO;

import java.time.LocalDate;

public record LendDTO(Long id, LocalDate lendingDate, LocalDate returnDate,String userName,String bookName) {
}
