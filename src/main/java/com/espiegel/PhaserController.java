package com.espiegel;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PhaserController {

    @GetMapping("/")
    public String index() {
        return "index.html";
    }
}
