import os
import sys
import readin
import pullout

Game_names = readin.GetID('ID.txt')
layoutIDs = readin.GetID('LID.txt')
IDs, Ns, Fs, index = readin.LoadPID('raw.txt')
pullout.GoData(index, layoutIDs, IDs, Ns, Fs, Game_names)
