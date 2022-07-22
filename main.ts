// a=maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)
// b=maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)
function ledR() {
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
}

function ledL() {
    music.playTone(330, music.beat(BeatFraction.Whole))
    for (let i = 0; i < 3; i++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
}

function turnR(n: number) {
    ledR()
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(780 * n)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}

function turnL(n: number) {
    ledL()
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(760 * n)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}

function maqStop() {
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}

function maqBackward(n: number) {
    if (n == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 197)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 197)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(5550 * n)
        maqStop()
    }
    
}

function maqForward(n: number) {
    if (n == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 197)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 197)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(5550 * n)
        maqStop()
    }
    
}

function maqSlightLeft() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
}

function maqSlightRight() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
}

function maqSteerLeft() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 180)
}

function maqSteerRight() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 180)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}

basic.forever(function on_forever() {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqForward(0)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqSlightRight()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqSlightLeft()
    }
    
})
