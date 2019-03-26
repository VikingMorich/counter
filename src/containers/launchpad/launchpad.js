import { connect } from 'react-redux';
import Launchpad from '../../components/launchpad';
import audioSaxo from "../../mp3/aaj_3405_CoolSaxRiff2.mp3";
import audioHorse from "../../mp3/audio_hero_s-horse-whinny.mp3";
import audioBeatBoxkick from "../../mp3/musical_human_beatbox_kick_drum.mp3";
import audioBeatBoxSnare from "../../mp3/musical_human_beatbox_snare_drum.mp3";
import audioExplosion from "../../mp3/zapsplat_explosion_enhancer_massive_heavy_ott_distorted_boom_003_28391.mp3";
import audioRockLoop from "../../mp3/music_zapsplat_lazy_days_137.mp3";

const mapStateToProps = (state) => {
    return {
        soundfile0: new Audio(audioHorse),
        soundfile1: new Audio(audioExplosion),
        soundfile4: new Audio(audioBeatBoxkick),
        soundfile5: new Audio(audioBeatBoxSnare),
        soundfile18: new Audio(audioRockLoop),
        soundfile19: new Audio(audioSaxo)
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Launchpad);