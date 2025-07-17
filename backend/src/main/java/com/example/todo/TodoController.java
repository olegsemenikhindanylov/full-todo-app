package com.example.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    private TodoRepository repo;

    @GetMapping
    public List<Todo> all() {
        return repo.findAll();
    }

    @PostMapping
    public Todo create(@RequestBody Todo todo) {
        return repo.save(todo);
    }

    @PutMapping("/{id}")
    public Todo update(@PathVariable Long id, @RequestBody Todo todo) {
        todo.setId(id);
        return repo.save(todo);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        repo.deleteById(id);
    }
}