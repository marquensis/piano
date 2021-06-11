document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        let a = new Audio("music/A.mp3");
        a.play();
    } else if (event.code === "KeyS") {
        let s = new Audio("music/S.mp3");
        s.play();
    } else if (event.code === "KeyD") {
        let d = new Audio("music/D.mp3");
        d.play();
    } else if (event.code === "KeyF") {
        let f = new Audio("music/F.mp3");
        f.play();
    } else if (event.code === "KeyG") {
        let g = new Audio("music/G.mp3");
        g.play();
    } else if (event.code === "KeyH") {
        let h = new Audio("music/H.mp3");
        h.play();
    } else if (event.code === "KeyJ") {
        let j = new Audio("music/J.mp3");
        j.play();
    } else if (event.code === "KeyW") {
        let w = new Audio("blm/W.mp3");
        w.play();
    }else if (event.code === "KeyE") {
        let e = new Audio("blm/E.mp3");
        e.play();
    }else if (event.code === "KeyT") {
        let t = new Audio("blm/T.mp3");
        t.play();
    }else if (event.code === "KeyY") {
        let y = new Audio("blm/Y.mp3");
        y.play();
    }else if (event.code === "KeyU") {
        let u = new Audio("blm/U.mp3");
        u.play();
    }else {
        console.log("Warning!");
    }
});