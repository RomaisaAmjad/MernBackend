import numpy as np
import matplotlib.pyplot as plt

# Harmonics: odd integers from -9 to 9 (excluding zero)
k = np.array([-9, -7, -5, -3, -1, 1, 3, 5, 7, 9])

# Angular frequencies
omega = k * np.pi

# Magnitudes of coefficients |a_k| = 2 / (|k| * pi)
amplitudes = 2 / (np.abs(k) * np.pi)

plt.stem(omega, amplitudes, use_line_collection=True)
plt.xlabel('Angular Frequency ω (rad/s)')
plt.ylabel('Magnitude |a_k|')
plt.title('Magnitude Spectrum of the Signal')
plt.xticks(omega)
plt.grid(True)
plt.show()
