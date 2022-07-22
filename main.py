#a=maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)
#b=maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)
def ledR():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    for i in range(3):
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
            basic.pause(100)
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
            basic.pause(100)
        
def ledL():
    music.play_tone(330, music.beat(BeatFraction.WHOLE))
    for i in range(3):
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
            basic.pause(100)
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
            basic.pause(100)


def turnR(n):
    ledR()
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(780*n)
    maqueen.motor_stop(maqueen.Motors.M1)
    maqueen.motor_stop(maqueen.Motors.M2)

def turnL(n):
    ledL()
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(760*n)
    maqueen.motor_stop(maqueen.Motors.M1)
    maqueen.motor_stop(maqueen.Motors.M2)

def maqStop():
    maqueen.motor_stop(maqueen.Motors.M1)
    maqueen.motor_stop(maqueen.Motors.M2)

def maqBackward(n):
    if n==0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 197)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 197)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(5550*n)
        maqStop()

def maqForward(n):
    
    if n==0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 197)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 197)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(5550*n)
        maqStop()
def maqSlightLeft():
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)

def maqSlightRight():
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 50)

def maqSteerLeft():
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 180)

def maqSteerRight():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 180)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)


def on_forever():
    
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==0:
        maqForward(0)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==0:
        maqSlightRight()
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==1:
         maqSlightLeft()
        
basic.forever(on_forever)
