package com.example.demo.controller;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;


    @PostMapping("/addUser")
    @CrossOrigin("http://localhost:5173")
    public void saveUser(@RequestBody User user) {
        userService.saveUser(user);
    }

    @GetMapping("/getAll")
    @CrossOrigin("http://localhost:5173")
    public List<User> findAllUsers() {
        return userService.getAll();
    }

    @GetMapping("/get/{id}")
    @CrossOrigin("http://localhost:5173")
    public User getUser(@PathVariable Long id) {

        return userService.getUser(id);
    }

    @DeleteMapping("/delete/{id}")
    @CrossOrigin("http://localhost:5173")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }


    @PutMapping("/update/{id}")
    @CrossOrigin("http://localhost:5173")
    public User userUpdate(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }
}
