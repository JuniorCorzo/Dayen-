package com.dayen.dayen.dao.request;

public record LoteRequest(
		Integer idLote,
		String idUsuario,
		String nombre,
		String tituloImagen,
		String fase,
		Integer hectareas
) {
}
