from microbit import *
import random
import time
D=40
FULL = D*D

def mkUni(diam):
    for i in range(3):
        display.show(Image.DIAMOND_SMALL)
        time.sleep(.2)
        display.show(Image.DIAMOND)
        time.sleep(.2)
        
    Universe = []
    for i in range(diam*diam):
        if random.randrange(10)<6: #star
            Universe.append(1+random.randrange(7))
        else:
            Universe.append(0)
    return Universe

def show(x,y,uni):
    for yy in range(5):
        for xx in range(5):
            display.set_pixel(xx,yy,uni[(FULL+xx+x+y*D+yy)%FULL])

x = 0
y = 0
cosmos = mkUni(D)

show(0,0,cosmos)

while True:
    if pin_logo.is_touched():
        cosmos = mkUni(D)
        x=0
        y=0
        show(x,y,cosmos)
    if accelerometer.was_gesture("left"):
        x = x - 1
        if x<0:
            x=D
        show(x,y,cosmos)
    if accelerometer.was_gesture("right"):
        x = x + 1
        if x>=D:
            x=0
        show(x,y,cosmos)
    if accelerometer.was_gesture("up"):
        y = y - 1
        if y<0:
            y=D
        show(x,y,cosmos)
    if accelerometer.was_gesture("down"):
        y = y + 1
        if y>=D:
            y=0
        show(x,y,cosmos)
