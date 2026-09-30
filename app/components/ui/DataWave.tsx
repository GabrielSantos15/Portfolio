import styles from './DataWave.module.css';

interface DataWaveProps {
    scale?: number; 
}

export default function DataWave({ scale = 1 }: DataWaveProps) {
    return (
        <div 
            className={styles.dataWave} 
            style={{ 
                transform: `scale(${scale})`,
                transformOrigin: 'center right' 
            }}
        >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </div>
    );
}